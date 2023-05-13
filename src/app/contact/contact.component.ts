import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import { User } from '../models/usuario.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  public usuario: User;

  constructor(private renderer2: Renderer2) {
    this.usuario = new User('', '', '', '');

  }

  ngOnInit(): void {

  }

  onSubmit() {

  }

}
