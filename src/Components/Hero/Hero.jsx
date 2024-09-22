import './Hero.css'
import profile_img from '../../assets/profile.jpg'
// import resume from '../../assets/Vikas Resume Latest(for portfolio).pdf'

export default function Hero() {

    // const handleDownload = () => {
    //     const link = document.createElement('a');
    //     link.href = resume;
    //     link.download = 'Vikas Seervi Resume.pdf';
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    //   };
    
    return(
        <div id='home' className='hero'>
            <div className='container'>
                <div className='right-half'>
                    <img className='profile-img pic-slide-in' src={profile_img} alt='profile image'></img>
                </div>
                <div className='left-half'>
                    {/* <h1 className='text-slide-in line1'> </h1> */}
                    <h1 className='text-slide-in line1'>  Hi,👋 <span className='gradient-text'> I&apos;m Vikas Seervi </span>, an undergraduate student with a passion for full stack development and a love for learning new things!</h1>
                    {/* <h1 className='text-slide-in line2'>  </h1>
                    <h1 className='text-slide-in line3'> </h1> */}
                </div>
            </div>
            <div className >
                <div className='text-slide-up hero-resume' onClick={() => window.open('https://drive.google.com/file/d/16oFI_zSgBCQycXf16UBgf53s0QcdhC7a/view?usp=drive_link', '_blank')}> My Resume</div>
                {/* <div className='text-slide-up hero-resume' onClick={handleDownload}> My Resume</div> */}
            </div>
        </div>
    )
}

// Hi,👋 I'm Vikas Seervi, an undergraduate student with a passion for full stack development and a love for learning new things!