import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-congratz-page',
  templateUrl: './congratz-page.component.html',
  styleUrls: ['./congratz-page.component.css'],
  styles: [
    `
      @media (min-width: 768px) {
          .h-md-100 { height: 120vh; }
          .popupBg { width: 690px !important; height: 570px !important; }
          .popupImg { height: 26rem !important; }
          .congratzText { line-height: 5rem !important; font-size: 3rem !important; }
          p { font-size: 2rem !important; }
          button { padding: 1rem !important; width: 25rem !important; font-size: 2rem !important;}
      }
      .btn-round { border-radius: 30px; }
      .bg-img { background: url(assets/images/bg.png) no-repeat; }
      .text-cyan { color: #35bdff; }
      p {
          font-family: Lato;
      }
      div.h-100 {
        margin-top: 10vh;
      }
      input.ng-invalid.ng-touched {
        border-color: red;
      }
      table {
        margin-top: 20px;
      }
      .location_input {
        background-image: url(assets/images/location.svg);
        background-size: 25px 25px;
        background-repeat: no-repeat;
        background-position: right;
      }
      div.show-effect
      {
        position: relative;
      }
      div.show-effect:before, .effect2:after
      {
        z-index: -1;
        position: absolute;
        content: "";
        bottom: 15px;
        left: 10px;
        width: 50%;
        top: 80%;
        max-width:300px;
        background: #777;
        -webkit-box-shadow: 0 15px 10px #777;
        -moz-box-shadow: 0 15px 10px #777;
        box-shadow: 0 15px 10px #777;
        -webkit-transform: rotate(-3deg);
        -moz-transform: rotate(-3deg);
        -o-transform: rotate(-3deg);
        -ms-transform: rotate(-3deg);
        transform: rotate(-3deg);
      }
      div.show-effect:after
      {
        -webkit-transform: rotate(3deg);
        -moz-transform: rotate(3deg);
        -o-transform: rotate(3deg);
        -ms-transform: rotate(3deg);
        transform: rotate(3deg);
        right: 10px;
        left: auto;
      }
    `
  ]
})

export class CongratzPageComponent implements AfterViewInit, OnDestroy, OnInit {
  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {}

  ngOnDestroy() {}
}
