interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: 'a',
    size: {
        width: 20,
        height: 30
    },
    color: '#69ccdb'
}

const rect2: Rect = {
    id: 'b',
    size: {
        width: 23,
        height: 35
    }
}

rect2.color = '#f3f3f3'
// rect2.id = 'c'; --- we can't do it, readonly

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// Наледование интерфейсов

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: 'a5',
    size: {
        width: 23,
        height: 35
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}

interface IClock  {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: "1px solid blue",
    margin: "20px 40px"
}


