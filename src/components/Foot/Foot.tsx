import s from './Foot.module.css';

const Foot = ({app}: {app: string}) => {
    const year = (new Date()).getFullYear();

    return (
      <div className={s.foot}>
        <span className="clr" />
        <br /><hr />
        <footer>&copy; {year} Kyle Tolliver -- {app}</footer>
      </div>
    );
}

export default Foot;
