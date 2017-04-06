import $ = require("jquery");
import ko = require("knockout");

import * as Module1 from "./moduleone";
import * as Module2 from "./moduletwo";
import * as SizeChart from "./sizeChart";
import * as Inliners from "./Inliners";
import * as MadeToMeasure from "./MadeToMeasure";
import * as mills from "./our-mills";
import * as popups from "./popups";


export = class Main {

    constructor() {
    }

    start() {

        let m1 = new Module1.ModuleOne();
        let m2 = new Module2.ModuleTwo();

        m1.sayHelloTo("David Wesst");
        m2.sayHelloTo("David Wesst");

        $(() =>  {
            const inliners = new Inliners.Inliners();
            const madeToMeasure = new MadeToMeasure.MadeToMeasure();
            const popup = new popups.Popups();
            const ourMills = new mills.OurMills();
        });

        $(document).ajaxComplete(() => {
            const but = $('.checkout__button--calculate');
            //but.appendTo('.authentication-wrapper');
            if ($('.checkout__payments').is(':visible')) {
                but.hide();
            }
        });

    }
}
