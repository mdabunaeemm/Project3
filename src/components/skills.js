import '../css/skills.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Skills(props){
    const {html}=props;
    return(
        <div className='progress-container'>
            <label>{html[0]}</label>
            <div  style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={html[1]} text={`${html[1]}%`} />
            </div>
        </div>
        
    )
}