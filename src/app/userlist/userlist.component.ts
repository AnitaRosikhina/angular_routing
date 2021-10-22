import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

interface IUser {
  login: string
  password: string
  email: string
}

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  login = ''
  password = ''
  email = ''
  error = false

  users: IUser[] = []
  addState = true
  editingIndex: number = 0

  @ViewChild('emailInput', {static: true}) emailRef?: ElementRef

  ngOnInit() {
    if (this.emailRef) {
      this.emailRef.nativeElement.style.borderColor = 'gray'
    }
  }

  get loginIsValid(): boolean {
    return !!this.login && new RegExp(/^\S+[a-zA-Z]{3,16}$/).test(this.login)
  }

  get passwordIsValid(): boolean {
    return !!this.password && new RegExp(/^\S{4,16}/).test(this.password)
  }

  get emailIsValid(): boolean {
    return !!this.email && new RegExp(/\S+@\S+\.\S+/).test(this.email)
  }

  get checkFormValidity(): boolean {
    return this.loginIsValid && this.passwordIsValid && this.emailIsValid
  }

  addUser() {
    if (this.checkFormValidity) {
      let info: IUser = {
        login: this.login,
        password: this.password,
        email: this.email,
      }

      this.error = false
      this.users.push(info)
      this.reset()
    } else if (!this.checkFormValidity) {
      this.error = true
    }
  }

  reset(): void {
    this.login = ''
    this.password = ''
    this.email = ''
  }

  setFieldsForEditUser(user: IUser, index: number) {
    this.addState = false
    this.login = user.login
    this.password = user.password
    this.email = user.email
    this.editingIndex = index
  }

  deleteUser(index: number) {
    this.users.splice(index, 1)
  }

  editUser() {
    if (this.checkFormValidity) {
      this.addState = true

      this.users[this.editingIndex] = {
        login: this.login,
        password: this.password,
        email: this.email,
      }
      this.reset()
    }
  }
}
