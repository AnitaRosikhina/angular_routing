import { Component, OnInit } from '@angular/core';
import { IPhoneBook} from "./user.interfase";

interface ISortState {
  firstName: boolean | undefined
  lastName: boolean | undefined
  number: boolean | undefined
}

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent {
  firstName = ''
  lastName = ''
  phoneNumber = ''
  users: IPhoneBook[] = [
    {firstName: 'b2', lastName: 'd2', number: '22'},
    {firstName: 'a', lastName: 'b', number: '11'},
    {firstName: 'c3', lastName: 'z3', number: '33'},
  ]
  modalError = false
  editingIndex: number | null = null
  search = ''
  readonly defaultSortDescendingState: ISortState = {
    firstName: undefined,
    lastName: undefined,
    number: undefined,
  }
  sortDescendingState: ISortState = {
    firstName: undefined,
    lastName: undefined,
    number: undefined,
  }

  save(): void {
    if (this.firstName.trim() && this.lastName.trim() && this.phoneNumber.trim()) {
      if (this.editingIndex === null) {
        this.users.push({firstName: this.firstName, lastName: this.lastName, number: this.phoneNumber})
      } else if (this.editingIndex >= 0) {
        this.users[this.editingIndex] = {
          firstName: this.firstName,
          lastName: this.lastName,
          number: this.phoneNumber
        }
      }
      this.modalError = false
      this.firstName = ''
      this.lastName = ''
      this.phoneNumber = ''
    } else {
      this.modalError = true
    }
  }

  edit(users: IPhoneBook, index: number): void {
    this.firstName = users.firstName
    this.lastName = users.lastName
    this.phoneNumber = users.number
    this.editingIndex = index
  }

  delete(index: number) {
    this.users.splice(index, 1)
  }

  onSort(key: 'firstName' | 'lastName' | 'number') {
    this.sortDescendingState = {
      ...this.defaultSortDescendingState,
      [key]: !this.sortDescendingState[key]
    }
    if (this.sortDescendingState[key]) {
      this.users.sort((a, b) => {
        return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
      })
    } else {
      this.users.sort((a, b) => {
        return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0
      })
    }
  }

}
