export const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i) => ({
        y: "0%",
        transition: {duration: 0.5, delay: 0.01 * i}
    }),
    closed: {
        y: "100%",
        transition: {duration: 0.5}
    }
}

export const sliderHead = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.01 * i}})
}

export const opacity = {
    initial: {
        opacity: 0
    },
    open:  {
        opacity: 1,
        transition: {duration: 0.8}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.8}
    }
}