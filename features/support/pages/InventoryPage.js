export default class InventoryPage {
    constructor(page) {
        this.page = page;
        this.title = '.title';
    }

    async verificarPaginaInventario() {
        await this.page.waitForSelector(this.title)
        const tituloSecao = await this.page.textContent(this.title)
        if (!tituloSecao.includes('Products')) {
            throw new Error('Login falhou: página não é a página de inventário.')
        }
    } 
}