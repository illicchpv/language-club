import './SelectSection.css';


export const SelectSection = () => {
  return (
    <div className="SelectSection">

      <h1 className="title">Select section</h1>

      <div className="blocksGrid">

        <div className="block1 blue">
          <h2 className="title">Учить новые слова</h2>
        </div>

        <div className="block1 green">
          <h2 className="title">Учить грамматику </h2>
        </div>

        <div className="block1 red">
          <h2 className="title">Экзамен </h2>
        </div>

        <div className="block1 yellow">
          <h2 className="title">Упражнения </h2>
        </div>
      </div>
      
      <div className="blocksGrid2">
        
        <div className="block2 blue">
          <h2 className="title">Этап: Новичок </h2>
          <p className='text'>На данном этапе Вам предстоит пройти 10 уровней </p>
          <div className="progress">
            <div className="counts">3/10</div>
            <div className="line"></div>
            <input className="line" type="range" min="0" max="10" value="3" readOnly></input>
          </div>
        </div>
        
        <div className="block2 blue">
          <h2 className="title">Этап: Новичок 1 </h2>
          <p>На данном этапе Вам предстоит пройти 15 уровней </p>
          <div className="progress">
            <div className="counts">0/15</div>
            <input className="line" type="range" min="0" max="15" value="0" readOnly></input>
          </div>
        </div>

        <div className="block2 blue">
          <h2 className="title">Этап: Новичок 2 </h2>
          <p>На данном этапе Вам предстоит пройти 15 уровней </p>
          <div className="progress">
            <div className="counts">0/15</div>
            <input className="line" type="range" min="0" max="15" value="0" readOnly></input>
          </div>
        </div>

      </div>

      <div className="footer"></div>

    </div >
  )
}
