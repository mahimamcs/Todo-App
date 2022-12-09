//import { useAlert } from 'react-alert-with-buttons'

function Todo() {
    return(
        <div className='card'>
                <h2>TITLE</h2>
                <div classNmae='actions'>
                    <button className='btn' onClick={clickMe}>Delete</button>
                </div>
            </div>
        
    );
}

function clickMe() {
    alert("You clicked me!");
  }

/*function clickMe()  {
    alert.open({
        message: "This is an alert",
        buttons: [
          {
            label: "button1",
            onClick: () => {
              //implement your function here for the button1 click
              alert.close() //Remeber that customly created button does not close the alert by default! 
              //You must add the close function manually!
            },
          },
          {
            label: "button2",
            onClick: () => {
              //implement your function here for the button2 click
              alert.close() //Remeber that customly created button does not close the alert by default! 
              //You must add the close function manually!
            },
          },
        ],
      })
};

*/

export default Todo;