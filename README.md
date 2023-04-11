# React Practical 4 (User_List_App (UI/UX))

I have Created a react app using CRA.
I used these following librabry for this Practical
  1. Bootstrap
  2. React-redux

This is my folder structure for this app.

![Screenshot from 2023-04-11 18-09-22](https://user-images.githubusercontent.com/122250114/231164892-755c4e32-e975-47d1-a088-44dfcb5bdb89.png)

Inside src folder I created a component directory inside which I created a different folder witch folder name according to their purpose.

I used Redux concept in this pratical and made the data flow unidirectional.

I do not use combinator in this practical because their is only one reducer for this practical. But I knew the concept of combinator & I also practise this. In feature there are multiple reducer then definitely I will use this.

My UI look like this:

1. For Laptop Screen 
    1. If row of table is not hover
     <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/5195a412e4138f97758630ef5459647dace7e758/Pracatical4S/fullscreen.png" />
     
    2. If row of table is hover
      <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/5195a412e4138f97758630ef5459647dace7e758/Pracatical4S/fullScreen_with_hover.png" />
      
2. For Tab Screen: 
   1. If row of table is not hover
      <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/5195a412e4138f97758630ef5459647dace7e758/Pracatical4S/tab.png" />
    2. If row of table is hover
      <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/5195a412e4138f97758630ef5459647dace7e758/Pracatical4S/tabletWithHover.png" />

3. For Mobile Screen: 
   1. If row of table is not hover
      <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/5195a412e4138f97758630ef5459647dace7e758/Pracatical4S/phone.png" />
    2. If row of table is hover
      <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/5195a412e4138f97758630ef5459647dace7e758/Pracatical4S/phoneWithHover.png" />
      
I store all the data which is showing in table in actionReducer.js. And even after hover over the table row, modal is getting data from there only.

