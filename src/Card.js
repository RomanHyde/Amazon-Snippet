import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import './App.css';


const names = [
  {itemName: 'Fire TV Stick Lite'},
  {itemName: 'Echo Studio'},
  {itemName: 'Echo Show 5'},
  {itemName: 'Kindle'}
]


const ItemLabel = (props) => {
  return(
    <div>
    <p>{props.itemName}</p>
    </div>
  )
}

const Title = () =>{
  <div>Title here</div>
}


const Card = () => {
    return (
      <div className='cardContainer grid-container'>
        <div className='grid 1'>
            <img src={img1} alt='remote img'/>
            <ItemLabel itemName={names[0].itemName} />
        </div>
        <div className='grid 2'>
            <img src={img2} alt='speaker img'/>
            <ItemLabel itemName={names[1].itemName} />
        </div>
        <div className='grid 3'>
          <img src={img3} alt='amazon echo img'/>
          <ItemLabel itemName={names[2].itemName} />
        </div>
        <div className='grid 4'>
          <img src={img4} alt='kindle'/>
          <ItemLabel itemName={names[3].itemName} />
        </div>
          <a href='#'>See More</a>
      </div>
    )
  };

  export default Card;