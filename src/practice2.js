const inject = (items, sections) => {
    for (let i = 0; i < sections.length; i++) {
        const {content, index} = sections[i];
        items.splice(index,1,[content,items[index]]);
    }
    return items.flat();
}
export { inject };
