import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {
  portfolio=[
    {
      title: "วาดภาพจากสีน้ำ",
      detail: "วาดภาพธรรมชาติ",
      date: "28/03/2562",
      image: {url:"http://4.bp.blogspot.com/-gScTvVB8Ywk/VP078N7cTDI/AAAAAAAABOE/GzgfQ2wBFEw/s1600/11004814_761872037222079_295830910_n.jpg"}
    },
    {
      title: "สิ่งประดิษฐ์",
      detail: "สิ่งประดิษฐ์",
      date: "28/03/2562",
      image: {url:"https://1.bp.blogspot.com/-8afnUArRFJI/WRT_Ja8cFQI/AAAAAAAAEeY/dXKk-tbYam4QGzhTI5oVJZZMOVtes2pGQCLcB/s1600/DIY%2B%25E0%25B8%2582%25E0%25B8%25AD%25E0%25B8%2587%25E0%25B9%2580%25E0%25B8%25AB%25E0%25B8%25A5%25E0%25B8%25B7%25E0%25B8%25AD%25E0%25B9%2583%25E0%25B8%258A%25E0%25B9%2589%25E0%25B9%2580%25E0%25B8%2581%25E0%25B9%258B%25E0%25B9%2586%2B%25E0%25B8%25AA%25E0%25B8%25B4%25E0%25B9%2588%25E0%25B8%2587%25E0%25B8%259B%25E0%25B8%25A3%25E0%25B8%25B0%25E0%25B8%2594%25E0%25B8%25B4%25E0%25B8%25A9%25E0%25B8%2590%25E0%25B9%258C%25E0%25B8%2588%25E0%25B8%25B2%25E0%25B8%2581%25E0%25B8%259D%25E0%25B8%25B2%25E0%25B8%2582%25E0%25B8%25A7%25E0%25B8%2594%2B3.jpg"}
    },
    {
      title: "วาดภาพจากสีน้ำ",
      detail: "วาดภาพธรรมชาติ",
      date: "28/03/2562",
      image: {url:"http://4.bp.blogspot.com/-gScTvVB8Ywk/VP078N7cTDI/AAAAAAAABOE/GzgfQ2wBFEw/s1600/11004814_761872037222079_295830910_n.jpg"}
    },
    {
      title: "สิ่งประดิษฐ์",
      detail: "สิ่งประดิษฐ์",
      date: "28/03/2562",
      image: {url:"https://1.bp.blogspot.com/-8afnUArRFJI/WRT_Ja8cFQI/AAAAAAAAEeY/dXKk-tbYam4QGzhTI5oVJZZMOVtes2pGQCLcB/s1600/DIY%2B%25E0%25B8%2582%25E0%25B8%25AD%25E0%25B8%2587%25E0%25B9%2580%25E0%25B8%25AB%25E0%25B8%25A5%25E0%25B8%25B7%25E0%25B8%25AD%25E0%25B9%2583%25E0%25B8%258A%25E0%25B9%2589%25E0%25B9%2580%25E0%25B8%2581%25E0%25B9%258B%25E0%25B9%2586%2B%25E0%25B8%25AA%25E0%25B8%25B4%25E0%25B9%2588%25E0%25B8%2587%25E0%25B8%259B%25E0%25B8%25A3%25E0%25B8%25B0%25E0%25B8%2594%25E0%25B8%25B4%25E0%25B8%25A9%25E0%25B8%2590%25E0%25B9%258C%25E0%25B8%2588%25E0%25B8%25B2%25E0%25B8%2581%25E0%25B8%259D%25E0%25B8%25B2%25E0%25B8%2582%25E0%25B8%25A7%25E0%25B8%2594%2B3.jpg"}
    },{
      title: "วาดภาพจากสีน้ำ",
      detail: "วาดภาพธรรมชาติ",
      date: "28/03/2562",
      image: {url:"http://4.bp.blogspot.com/-gScTvVB8Ywk/VP078N7cTDI/AAAAAAAABOE/GzgfQ2wBFEw/s1600/11004814_761872037222079_295830910_n.jpg"}
    },
    {
      title: "สิ่งประดิษฐ์",
      detail: "สิ่งประดิษฐ์",
      date: "28/03/2562",
      image: {url:"https://1.bp.blogspot.com/-8afnUArRFJI/WRT_Ja8cFQI/AAAAAAAAEeY/dXKk-tbYam4QGzhTI5oVJZZMOVtes2pGQCLcB/s1600/DIY%2B%25E0%25B8%2582%25E0%25B8%25AD%25E0%25B8%2587%25E0%25B9%2580%25E0%25B8%25AB%25E0%25B8%25A5%25E0%25B8%25B7%25E0%25B8%25AD%25E0%25B9%2583%25E0%25B8%258A%25E0%25B9%2589%25E0%25B9%2580%25E0%25B8%2581%25E0%25B9%258B%25E0%25B9%2586%2B%25E0%25B8%25AA%25E0%25B8%25B4%25E0%25B9%2588%25E0%25B8%2587%25E0%25B8%259B%25E0%25B8%25A3%25E0%25B8%25B0%25E0%25B8%2594%25E0%25B8%25B4%25E0%25B8%25A9%25E0%25B8%2590%25E0%25B9%258C%25E0%25B8%2588%25E0%25B8%25B2%25E0%25B8%2581%25E0%25B8%259D%25E0%25B8%25B2%25E0%25B8%2582%25E0%25B8%25A7%25E0%25B8%2594%2B3.jpg"}
    }
    ]

    constructor(
      public route: NavController
    ) { }
  
    ngOnInit() {
    }
    backtotab1() {
      this.route.navigateForward('/tabs/tab1')
    }
}
