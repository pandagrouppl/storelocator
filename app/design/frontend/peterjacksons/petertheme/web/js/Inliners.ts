import $ = require("jquery");

export class Inliners {

    constructor() {
        this._showSearch();
        this._hideShowPaymentsButton();
        this._preventSpinnerClick();
        this._toggleFilters();
        this._toggleResponsiveMenu();
        this._toggleSubmenuResponsive()
    }

    private _showSearch(): void {
        $('.header-right__show-search-overlay').on('click', () => {
            $('.search-overlay').show();
        });
        $('.search-overlay').click(() => {
            $('.search-overlay').hide();
        });
        $('.search-overlay__form').click((event) => {
            event.stopPropagation();
        });
    }

    private _hideShowPaymentsButton(): void {
        if ($('.checkout__payments').is(':visible')) {
            console.log('positive!');
            $('.checkout__button--calculate').hide();
        }
    }

    private _preventSpinnerClick(): void {
        $('.spinner').click((event) => {
            event.preventDefault();
        })
    }

    private _toggleFilters(): void {
        $('.layered-nav__button').click(() => {
            $('.layered-nav').toggle();
        });
    }

    private _toggleResponsiveMenu(): void {
        $('.header-left__menu').click(() => {
            $('.header-left__menu-bar').toggleClass('header-left__menu-bar--open');
            $('.header-responsive').slideToggle();
        });
    }

    private _toggleSubmenuResponsive(): void {
        $('.header-responsive__toggler').click(function() {
            $(this).toggleClass('header-responsive__toggler--open');
            $(this).parent().next().slideToggle();
        });
    }
 }