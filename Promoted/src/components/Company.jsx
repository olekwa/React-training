 
export default function Company() {
    const Logos = [
        {
            id: 1,
            imgSrc: "/images/agentai.gif",
            altText: "agentai Logo"
        },
        {
            id: 2,
            imgSrc: "/images/writer.svg",
            altText: "Writter Logo"
        },
        {
            id: 3,
            imgSrc: "/images/bolt.svg",   
            altText: "Boltnew Logo"
        },
        {
            id: 4,
            imgSrc: "/images/fold.svg",
            altText: "Fold Logo"
        },
        {
            id: 5,
            imgSrc: "/images/bitkey.svg",
            altText: "Bitkey Logo"
        },
        {
            id: 6,
            imgSrc: "/images/foundation.svg",
            altText: "Foundation Logo"
        }
    ];
    
    
    
    return <div className="company-section">
        <div className="company-logos">
            {Logos.map(logo => (
                <div key={logo.id} className="company-logo">
                    <img src={logo.imgSrc} alt={logo.altText} />
                </div>
            ))}
        </div>
    </div>;
}