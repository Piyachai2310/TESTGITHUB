import './TattoolItem.css';

function TattooItem(props) {
    const {title , thumbnalUrl } = props;
    return (
        <div className="tattoo-item">
            <img src= {thumbnalUrl} />
            <h4>{title}</h4>
        </div>
    );
}

export default TattooItem;
