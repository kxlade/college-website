import "./Campus.css";
const Campus = () => {
    return (
        <section>
            <div>
                <h1>Our Campus</h1>
                <div className="camp-img-div">
                    {/* <img src="src/assets/coding-image.webp" alt="" className="campus-img"/> */}
                    <div className="img-div">
                        <p className="fade-in-para">Environments</p>
                    </div>

                    <div className="img-div div2">
                        <p className="fade-in-para">Community</p>
                    </div>

                    <div className="img-div div3">
                        <p className="fade-in-para">Education</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Campus;
