import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserSessionDto } from '../../commons/dto/user-session.dto';
import { AuthenticationService } from '../../services/authservice.service';
import { Subscription } from 'rxjs';
import { ShareService } from '../../services/share.service';
import { error } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  public isCollapsed = true;
  public sesionUp :UserSessionDto ;
  public currentUserSubscription: Subscription;
  
  constructor(private _authservice: AuthenticationService,
              private _routeService : Router,
              ) {
    this._authservice.currentUser.subscribe(
      (s) => this.sesionUp = s,
      (error) => console.error(error)  
    );
  }

  public navigate(route: string[]) {
    console.log('route: ',route);
    
    this._routeService.navigate(route);
    // const element = document.getElementById(route);
    // element.scrollIntoView({behavior: 'smooth'});
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");

    /*var canvas: any = document.getElementById("chartBig");
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
    gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
    gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
    var chartBig = new Chart(ctx, {
      type: "line",
      responsive: true,
      data: {
        labels: [
          "JUN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC"
        ],
        datasets: [
          {
            label: "Data",
            fill: true,
            backgroundColor: gradientFill,
            borderColor: "#e44cc4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#e44cc4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#be55ed",
            //pointHoverBorderColor:'rgba(35,46,55,1)',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [80, 160, 200, 160, 250, 280, 220, 190, 200, 250, 290, 320]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },

        tooltips: {
          backgroundColor: "#fff",
          titleFontColor: "#ccc",
          bodyFontColor: "#666",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(0,0,0,0.0)",
                zeroLineColor: "transparent"
              },
              ticks: {
                display: false,
                suggestedMin: 0,
                suggestedMax: 350,
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }
          ],

          xAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(0,0,0,0)",
                zeroLineColor: "transparent"
              },
              ticks: {
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }
          ]
        }
      }
    });*/
  }
  public captureSession () {
    this._authservice.currentUser.subscribe(
      (s) => this.sesionUp = s,
      (error) => console.error(error)      
    );
    console.log('this.sesionUp', this.sesionUp);
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }

}
