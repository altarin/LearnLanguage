import './WordCardBack.scss';

function WordCardBack(props) {
    return (
        <div className="wordCardBack">
            <div className="card-translation">{props.translation}</div>
        </div >
    );
}

export default WordCardBack;