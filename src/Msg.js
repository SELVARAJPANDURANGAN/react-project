import { Counter } from "./Counter";

export default function Msg({ pic, name }) {
  const user = [
        {
          name:"Nature",
          pic:"https://th.bing.com/th/id/R.5532d4c0283a3407fa2d739675234426?rik=AuWOG3fhff6Msg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-6eNLkocOG_0%2fUhiZ12F4TqI%2fAAAAAAAAE6o%2fII_4qm4sCKw%2fs1600%2fa%2b(17).jpg&ehk=%2b2ZEpi1gWp7JLCanegUSnklD0DHQGcY%2bn9DWNVEId%2fQ%3d&risl=&pid=ImgRaw&r=0"
        },{
        name:"Nature",
        pic:"https://th.bing.com/th/id/R.2a78b445e9a2ecf5a18f0edbc61d4350?rik=gZI0f%2fveaNAsRg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-6m_t9hv5dVc%2fUhia6C5dpGI%2fAAAAAAAAE8U%2ftDvA-vv34MU%2fs1600%2fa%2b(6).jpg&ehk=8ux0TO9pKC%2bJEyY2VpKn5Z5jP7961gOCAe%2f2atKKlZM%3d&risl=&pid=ImgRaw&r=0"
        },
    {
      name:"Nature",
      pic:"https://th.bing.com/th/id/OIP.StevUbUkH_d5dt6Mp8R-dQHaFX?pid=ImgDet&rs=1"
    }
      ]
  // function Msg(props){
  return (
    <div className="user-container">
      <img className="images" src={pic}  />
      <h1>hello Msg {name} </h1>
      <Counter />
      {/* <img className="images" src={props.pic}/>
          <h1>hello Msg {props.name} </h1> */}
      {/* <h2>hello welcome {props.name}</h2> */}
    </div>
  );
}

export const double =(n)=> n*2;

// export {Msg, double};
