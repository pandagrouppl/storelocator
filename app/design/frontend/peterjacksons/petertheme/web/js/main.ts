import $ = require("jquery");
import ko = require("knockout");

import * as SizeChart from "./sizeChart";
import * as Inliners from "./Inliners";
import * as MadeToMeasure from "./MadeToMeasure";
import * as MailChimpAjax from "./mailChimpAjax";
import * as LookBook from "./LookBook";
import * as mills from "./our-mills";
import * as popups from "./popups";

export = class Main {

    constructor() {
    }

    start() {
        const ourMills = new mills.OurMills();
        $(() =>  {
            const inliners = new Inliners.Inliners();
            const madeToMeasure = new MadeToMeasure.MadeToMeasure();
            const mailChimpAjax = MailChimpAjax('mc-embedded-subscribe-form');
            const popup = new popups.Popups();
            const lookBook = new LookBook.LookBook();

        });
    }
}
