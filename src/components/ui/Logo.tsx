import logoIcon from '../../assets/images/logoIcon.png';

export default function Logo() {
    return (
        <div className='flex justify-center items-center gap-3 text-[clamp(1.5rem,1vw+0.6rem,1.875rem)]'>
            <img src={logoIcon} alt="" className='w-13'/>
            <h1> Pogoda </h1>
        </div>
    )
}