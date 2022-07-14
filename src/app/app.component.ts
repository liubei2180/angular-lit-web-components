import { Component } from '@angular/core';
import { User } from 'src/web-components/card-user/user';
import '../web-components/card-user/card-user'; // 导入定义

@Component({
    selector: 'corp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    user: User = {
        id: 2,
        fullName: 'Luis',
        role: 'Software Engineer',
        avatar: 'https://luixaviles.com/images/avatar@2x.png',
    };

    edit(event: Event) {
        const user = (event as CustomEvent<User>).detail;
        console.log('Edit user', user);
    }

}
