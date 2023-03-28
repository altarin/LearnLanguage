import './WordList.scss';
import React from 'react';

function WordList(props) {
    const { text, transl } = props;
    const [isEdit, setEdit] = React.useState(false);
    return (
        <div className='list__word'>
            {
                isEdit ?
                    <>
                        <div className='list__word-text'>
                            <input type="text" defaultValue={text} />
                        </div>
                        <div className='list__word-transl'>
                            <input type="text" defaultValue={transl} />
                        </div>
                        <div>

                            <button className='btn_save' onClick={() => setEdit(false)}>Сохранить</button>
                            <button className='btn_delete'>Удалить</button>
                        </div>
                    </> :
                    <>
                        <div className='list__word-text'>{text}</div>
                        <div className='list__word-transl'>{transl}</div>
                        <div>
                            <button className='btn_edit' onClick={() => setEdit(true)}>Редактировать</button>
                            <button className='btn_delete'>Удалить</button>
                        </div>
                    </>
            }
        </div >
    );
}

export default WordList;