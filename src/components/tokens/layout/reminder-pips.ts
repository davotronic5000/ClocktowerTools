export const reminderPipsGenerator = (pip: string, amount: number) => {
    let pips = "";
    for (let i = amount; i > 0; i--) {
        pips += pip;
    }
    return pips;
};
