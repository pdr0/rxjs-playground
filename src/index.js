// RxJS v6+
import {interval, fromEvent} from 'rxjs';
import {map, throttle} from 'rxjs/operators';

const domButton = document.createElement('input');
domButton.setAttribute("type", "button")
domButton.setAttribute("class", "button")
domButton.setAttribute("value", "button")
document.querySelector('body').appendChild(domButton)

const requestGenerator = ()=> `https://api.github.com/users?access_token=c29eff88183c77cf4a81bc9a71000feac87f684d&since=${Math.floor(Math.random()*500)}`

const request = async () => {
    const response = await fetch(requestGenerator())
    const json = await response.json()
    return json
}



const button = document.querySelector('.button');
const clickButton$ = fromEvent(button, 'click')
const requests$ = clickButton$.pipe(
    throttle(url => interval(1000)),
    map(requestGenerator)

)

requests$.subscribe((val)=> console.log(val))

