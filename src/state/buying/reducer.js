import satu from "../../img/fotoproduct/1.png";
import dua from "../../img/fotoproduct/2.jpg";
import tiga from "../../img/fotoproduct/3.webp";
import empat from "../../img/fotoproduct/4.jpg";
import lima from "../../img/fotoproduct/5.jpg";
import enam from "../../img/fotoproduct/6.png";
import tujuh from "../../img/fotoproduct/7.jpg";
import sembilan from "../../img/fotoproduct/9.jpg";
import delapan from "../../img/fotoproduct/8.jpg";

const initialState = {
  counter: 0,
  item: [
    { foto: satu, content: "Kemeja Pria / satu ", desc: "satu", id: 1, qty: 1 },
  ],
  index: 0,
  stockitem: [
    {
      foto: satu,
      content: "Kemeja Pria / satu ",
      harga: 20,
      diskon: 3,
      desc: "satu",
      id: 1,
      sex: "Male",
      material: "100% Cotton",
    },
    {
      foto: dua,
      content: "Kemeja Pria / dua",
      harga: 43,
      diskon: 2,
      desc: "dua",
      id: 2,
      sex: "Male",
      material: "90% Cotton",
    },
    {
      foto: tiga,
      content: "Kemeja Pria / tiga",
      harga: 19,
      diskon: 4,
      desc: "tiga",
      id: 3,
      sex: "Male",
      material: "80% Cotton",
    },
    {
      foto: empat,
      content: "Kemeja Pria / empat",
      harga: 19,
      diskon: 4,
      desc: "empat",
      id: 4,
      sex: "Male",
      material: "60% Cotton",
    },
    {
      foto: lima,
      content: "Kemeja Pria / lima",
      harga: 19,
      diskon: 4,
      desc: "lima",
      id: 5,
      sex: "Male",
      material: "50% Cotton",
    },
    {
      foto: enam,
      content: "Kemeja Pria / enam",
      harga: 23,
      diskon: 2,
      desc: "enam",
      id: 6,
      sex: "Male",
      material: "50% Cotton",
    },
    {
      foto: tujuh,
      content: "Kemeja Pria / tujuh",
      harga: 34,
      diskon: 4,
      desc: "tujuh",
      id: 7,
      sex: "Male",
      material: "50% Cotton",
    },
    {
      foto: delapan,
      content: "Kemeja Pria / delapan",
      harga: 19,
      diskon: 4,
      desc: "lima",
      id: 8,
      sex: "Male",
      material: "50% Cotton",
    },
    {
      foto: sembilan,
      content: "Kemeja Pria / sembilan",
      harga: 19,
      diskon: 4,
      desc: "lima",
      id: 9,
      sex: "Male",
      material: "50% Cotton",
    },
  ],
};
const StoreOption = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        counter: state.counter + 1,
        item: [...state.item, action.value],
      };
    case "GO_ITEM":
      return {
        ...state,
        // index: state.index
      };
    case "PLUS_ITEM":
      // function maIndex(indexItem) {
      //   return indexItem === action.value;
      // }
      // const index = state.item.findIndex(maIndex);
      // console.log(index);
      return {
        ...state,
        item:state.item[1].qty+1
      };
    default:
      return state;
  }
};

export default StoreOption;
