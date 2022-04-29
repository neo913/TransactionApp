import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public activatedLink = "";

  public navItems = [
    { label: "Requirements",  path: "/requirements" },
    { label: "Transaction",   path: "/transaction"  },
    { label: "Additional",    path: "/additional"   },
  ]

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setActivatedLink();
  }

  setActivatedLink() {
    this.activatedLink = this.location.path();
  }

  navigateTo(path: string) {
    this.router.navigate([path], { relativeTo: this.route }).then(res => this.setActivatedLink());
  }

}
