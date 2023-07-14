import React from "react";
import Features_img_1 from "../../../assets/images/features_1.webp";
import Features_img_2 from "../../../assets/images/features_2.webp";
import Features_img_3 from "../../../assets/images/features_3.webp";
import Features_img_4 from "../../../assets/images/features_4.webp";
import Features_img_5 from "../../../assets/images/features_5.webp";

const Features = () => {
  return (
    <div className="features px-5">
      <p className="text-center">Features</p>
      <div className="row">
        <div className="col-md-5 order-md-1">
          <img src={Features_img_1} className="w-100 p-4" alt="nolan_fetures" />
        </div>
        <div className="col-md-7 order-md-2">
          <h3 className="title px-3">
            The Industry Standard Script Writing Software
          </h3>
          <p className="px-3">
            Nolan provides a user-friendly interface, advanced formatting
            options, and helpful features such as character and scene
            breakdowns, revision tracking, and collaboration tools. With its
            powerful tools and intuitive design.
          </p>
        </div>
      </div>{" "}
      <div className="row">
        <div className="col-md-5 order-md-2">
          <img src={Features_img_3} className="w-100 p-4" alt="nolan_fetures" />
        </div>
        <div className="col-md-7 order-md-1">
          <h3 className="title px-2">TRACK EVERY EDIT WITH EASE</h3>
          <p className="px-3">
            A per-row script history list is a feature in scriptwriting software
            that allows writers to track changes made to their scripts on a
            row-by-row basis. With this feature, writers can see a complete
            history of edits made to each line of dialogue, stage direction, or
            action in their script. This makes it easy to compare different
            versions of a script and to identify where changes have been made.
            The per-row script history list is an essential tool for writers who
            want to keep track of their progress and ensure that their scripts
            are always up-to-date.
          </p>
        </div>
      </div>{" "}
      <div className="row">
        <div className="col-md-5 order-md-1">
          <img src={Features_img_4} className="w-100 p-4" alt="nolan_fetures" />
        </div>
        <div className="col-md-7 order-md-1">
          <h3 className="title px-3">ASK NOLAN FOR SUGGESTION</h3>
          <p className="px-3">
            To help you create high-quality story, Nolan offers a powerful
            editing feature. With "Ask Nolan", you can easily enhance the
            quality of your text by highlighting the selected text, correcting
            any spelling and grammar errors, and adjusting the tone of the
            paragraph as necessary. This feature provides you with the
            flexibility to customize your text and make it more engaging and
            effective.
          </p>
        </div>
      </div>{" "}
      <div className="row">
        <div className="col-md-5 order-md-2">
          <img src={Features_img_4} className="w-100 p-4" alt="nolan_fetures" />
        </div>
        <div className="col-md-7 order-md-1">
          <h3 className="title px-3">CHANGE YOUR CHARACTER ACCENT</h3>
          <p className="px-3">
            Personalize your character and make it truly unique. "Change Accent"
            allows you to change your character's accent, making it sound more
            distinct and authentic. Whether you want to add a touch of
            personality to your character or create a character that stands out,
            this feature provides you with the flexibility to customize your
            character's accent to match your preferences. With this feature, you
            can create a character that truly represents you and brings your
            story to life.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 order-md-1">
          <img src={Features_img_5} className="w-100 p-4" alt="nolan_fetures" />
        </div>
        <div className="col-md-7 order-md-2">
          <h3 className="title px-3">SCRIPT SMART</h3>
          <p className="px-3">
            Script Smart uses advanced algorithms to automatically format your
            text into a screenplay format. With Script Smart, you can save time
            and focus on writing by letting the software handle the formatting
            for you. This feature also provides suggestions and corrections to
            help ensure that your screenplay adheres to industry standards and
            is formatted correctly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
