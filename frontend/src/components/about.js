import React from "react";
import pics from "./images/1.jpg";
import "./about.css";

function about() {
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4">
              <div className="text-center">
                {" "}
                <img src={pics} width="100" className="rounded-circle" />{" "}
              </div>
              <div className="text-center mt-3">
                {" "}
                <span className="bg-secondary p-1 px-4 rounded text-white">
                  Pro
                </span>
                <h5 className="mt-2 mb-0">Priyansh Singh</h5>{" "}
                <span>Web Developer</span>
                <div className="px-4 mt-1">
                  <p className="fonts" >
                    "Twinkle, Twinkle, Little Star" is a popular English
                    lullaby. The lyrics are from an early-19th-century English
                    poem written by Jane Taylor, "The Star". The poem, which is
                    in couplet form, was first published in 1806 in Rhymes for
                    the Nursery, a collection of poems by Taylor and her sister
                    Ann. It is sung to the tune of the French melody "Ah! vous
                    dirai-je, maman", which was published in 1761 and later
                    arranged by several composers, including Mozart with Twelve
                    Variations on "Ah vous dirai-je, Maman". The English lyrics
                    have five stanzas, although only the first is widely known.
                    It has a Roud Folk Song Index number of 7666. This song is
                    usually performed in the key of C major.The song is in the
                    public domain, and has many adaptations around the world.
                  </p>
                </div>
                <ul className="social-list">
                  <li>
                  <i className="fab fa-twitter"></i>
                  </li>
                  <li>
                  <i className="fab fa-twitter"></i>
                  </li>
                  <li>
                    <i className="fa fa-instagram"></i>
                  </li>
                  <li>
                    <i className="fa fa-linkedin"></i>
                  </li>
                  <li>
                    <i className="fa fa-google"></i>
                  </li>
                </ul>
                <div className="buttons">
                  {" "}
                  <button className="btn btn-outline-primary px-4">
                    Message
                  </button>{" "}
                  <button className="btn btn-primary px-4 ms-3">Contact</button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
