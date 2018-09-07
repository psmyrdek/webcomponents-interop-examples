import { Injectable } from "@angular/core";
import { Contact } from "./contact.model";

@Injectable({
    providedIn: 'root'
})
export class ContactsService {
    getAll(): Contact[] {
        return [
            {
                id: 1,
                name: 'Elon Musk',
                phoneNo: '+48 123 456 678',
                email: 'elon@musk.com',
                avatarUrl: 'https://image.ibb.co/kFAbfK/1500295159151.jpg'
            },
            {
                id: 2,
                name: 'John Doe',
                phoneNo: '+1 2132 312 32',
                email: 'john.doe11@gmail.com',
                avatarUrl: 'https://advisemeonline.com/wp-content/uploads/2017/09/6.jpg'
            },
            {
                id: 3,
                name: 'Mary Jane',
                phoneNo: '+48 111 777 222',
                email: 'm.jane@janem.com',
                avatarUrl: 'http://geedmo.com/codecanyon/47admin/app/img/user/06.jpg'
            },
            {
                id: 4,
                name: 'Tom Ford',
                phoneNo: '+1 123 3228 32',
                email: 'frord@tom.com',
                avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYUOKolx8ZPZ1IGATSdp9t-4vl6Vj6Zy18stgLps6--xkrkincg'
            }
        ]
    }
}