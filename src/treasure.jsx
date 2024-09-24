import React, { useEffect } from 'react'

const Treasure = () => {

    // Redirect function
    const redirectTo = () => {
        window.open('https://vortiga.cc/auth/register?r=qVFkbJDk'); // Replace with your desired URL
    };

    // Redirect after 5 seconds using useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            redirectTo();
        }, 8000);

        // Clean up the timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    const styles = {
        container: {
            backgroundColor: 'black',
            color: 'white',
            padding: '10px',
            textAlign: 'center',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        heading: {
            fontSize: '3rem',
            marginBottom: '20px',
            fontWeight: 'bold',
        },
        paragraph: {
            fontSize: '1.5rem',
            lineHeight: '1.2',
            marginBottom: '20px',
        },
        button: {
            backgroundColor: '#7717ff',
            color: '#fff',
            padding: '.6rem 1rem',
            fontSize: '.875rem',
            border: '0',
            borderRadius: '.375rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            columnGap: '.625rem', // Shorthand for gap between columns
            transition: 'all 0.3s ease',
            height: '3rem',
            whiteSpace: 'nowrap', // Prevent text from wrapping
        },        
        buttonHover: {
            backgroundColor: '#5e0ad4',
            color: 'white',
        },
    };

    // Button hover effect
    const handleButtonHover = (e) => {
        e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
        e.target.style.color = styles.buttonHover.color;
    };

    const handleButtonLeave = (e) => {
        e.target.style.backgroundColor = styles.button.backgroundColor;
        e.target.style.color = styles.button.color;
    };

    return (
        <>
            <head>
                <title>Welcome to heaven!</title>
            </head>
            <div style={styles.container}>
                <img src="/logo.png" width={300} alt="Vortiga" />
                <h1 style={styles.heading}>Vortiga CC Shop</h1>
                <p style={styles.paragraph}>We have 80-90% Valid rate with good AVS. (Refundable)</p>
                <p style={styles.paragraph}>We are in All carding forums such as <b>crdpro</b> and <b>altenens</b></p>
                <p style={styles.paragraph}>If you Signup right now, and open a ticket mentioning this email, we will give you a Gift.</p>
                <button 
                    style={styles.button} 
                    className='btn-main' 
                    onClick={redirectTo}
                    onMouseEnter={handleButtonHover}
                    onMouseLeave={handleButtonLeave}
                >
                    Check Now
                </button>
            </div>
        </>
    );
}

export default Treasure;
