import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    name:string = '';
    indexForEdit:number = null;
    todo:Array<string> = [];

    addToList() {
        if(this.indexForEdit){
            this.todo[this.indexForEdit] = this.name;
            this.indexForEdit = null;
        }else{
            this.todo.push(this.name);
        }
        this.name = '';
        console.log(this.todo);
    }
    delTodo(index){
        this.todo.splice(index,1);
        console.log(this.todo);
    }
    editTodo(index,todoname){
        this.name = todoname;
        this.indexForEdit = index;
    }
}
