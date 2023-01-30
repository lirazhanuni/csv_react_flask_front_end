import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Diamond from '../../app/models/Diamond';
import { RootState } from '../../app/store';
import { getDiamonds, addDiamond, delDiamond, updDiamond} from './diamondAPI';

export interface DiamondState {
  diamonds:Diamond[]
  update:boolean

}

const initialState: DiamondState = {
  diamonds:[],
  update:false

};


export const getDiamondsAsync = createAsyncThunk(
  'Diamond/getDiamonds',
  async () => {
    const response = await getDiamonds();
    return response;
  }
);

export const addDiamondAsync = createAsyncThunk(
  'Diamond/addDiamond',
  async (dia:Diamond) => {
    const response = await addDiamond(dia);
    return response;
  }
);

export const delDiamondAsync = createAsyncThunk(
  'Diamond/delDiamond',
  async (id:number) => {
    const response = await delDiamond(id);
    return response;
  }
);

export const updDiamondAsync = createAsyncThunk(
  'Diamond/updDiamond',
  
  async (dia:Diamond) => {
    const response = await updDiamond(dia);
    return response;
  }
);

export const DiamondSlice = createSlice({
  name: 'Diamond',
  initialState,
  reducers: {
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(getDiamondsAsync.fulfilled, (state, action) => {
        state.diamonds = action.payload.data
      }).addCase(addDiamondAsync.fulfilled, (state, action) => {
        console.log(action.payload.data)
        state.diamonds.push(action.payload.data)
      }).addCase(delDiamondAsync.fulfilled, (state, action) => {
        console.log(action.payload)
        state.diamonds= state.diamonds.filter(x => x.ID !== action.payload)
      }).addCase(updDiamondAsync.fulfilled, (state, action) => {
        console.log(action.payload.data)
        state.update =! state.update
      })
  },
});

export const selectDiamonds = (state: RootState) => state.Diamond.diamonds;
export const selectUpdate = (state:RootState) => state.Diamond.update;
export default DiamondSlice.reducer;
