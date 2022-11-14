import { Rating } from 'react-simple-star-rating'

export function Estrela({ valor }) {
    var onClick = () => { };
    var onPointerMove = () => { };
    var onPointerEnter = () => { };
    var onPointerLeave = () => { };
    return (
        <div className='App'>
            <Rating disabled={true}
                onClick={onClick}
                onPointerMove={onPointerMove}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                iconsCount={10}
                initialValue={valor}
                size="10px"
                allowHover={false}
                disableFillHover={false}
                allowFraction={true}
                rtl={false}
            />
        </div>
    )
}