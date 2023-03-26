import './wordCardFront.scss';

function WordCardFront(props) {
    return (
        <div className="wordCardFront">
            <div className="card-word">{props.word}</div>
            <div className="card-transcription">{props.transcription}</div>
        </div >
    );
}

export default WordCardFront;