import boy1 from "../Img/boy1.jpg";
import boy2 from "../Img/boy2.jpg";
import boy3 from "../Img/boy3.jpg";
import boy4 from "../Img/boy4.jpg";
import girl1 from "../Img/girl1.jpg";
import girl2 from "../Img/girl2.jpg";
import deleted from "../Img/delete.png"
import lock from "../Img/lock.png";


const data = {
  list: [
    {
      name: "George Bluth",
      email: "george.bluth@reqres.in",
      src: boy1,
      status: "Active",
      access: "Owner",
      progress: 25,
      icon: lock,
      click_reviewd: 2450,
      monthly_reviewd: 5000
    },
    {
      name: "Janet Weaver",
      email: "janet.weaver@reqres.in",
      src: girl1,
      status: "Inactive",
      access: "Manager",
      progress: 20,
      icon: deleted,
      click_reviewd: 2050,
      monthly_reviewd: 3000,
      click_reviewd: 2850,
      monthly_reviewd: 8000
    },
    {
      name: "Emma wong",
      email: "emma.wong@reqres.in",
      src: girl2,
      status: "Inactive",
      access: "Manager",
      progress: 45,
      icon: deleted,
      click_reviewd: 2950,
      monthly_reviewd: 6000,
      click_reviewd: 2250,
      monthly_reviewd: 8600
    },
    {
      name: "Eve Holt",
      email: "eve.jolt@reqres.in",
      src: boy2,
      status: "Inactive",
      access: "Manager",
      progress: 75,
      icon: deleted,
      click_reviewd: 3450,
      monthly_reviewd: 6800
    },
    {
      name: "Charles Morris",
      email: "charles.morris@reqres.in",
      src: boy3,
      status: "Inactive",
      access: "Manager",
      progress: 36,
      icon: deleted,
      click_reviewd: 9450,
      monthly_reviewd: 15506
    },
    {
      name: "Tracey Ramos",
      email: "tracey.ramos@reqres.in",
      src: boy4,
      status: "Inactive",
      access: "Manager",
      progress: 70,
      icon: deleted,
      click_reviewd: 4450,
      monthly_reviewd: 2106
    },
  ],
  modalToggle: false,
};
const indexReducer = (state = data, action) => {
  switch (action.type) {
    case "showdata":
      return [...state];

     case "showmodal":
      const newToggle = !state.modalToggle;
      const hoverData = state.list.filter(
        (item, index) => index === action.payload
      );
      return {
        ...state,
        modalToggle: newToggle,
        hoverData: hoverData,
      };

    default:
      return state;
  }
};

export default indexReducer;
