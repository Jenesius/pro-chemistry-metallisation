export default class LoadingController {
    static DIFF_TIME_MS = 1000 * 60 * 60 * 24; // 24 часа
    static LOCALSTORAGE_KEY = "loading-block";
    
    /**
     * Проверяет, нужно ли выполнить загрузку на основе времени последней загрузки.
     * @returns {boolean}
     */
    shouldLoad() {
        const last = this.getLastLoadTime();
        const now = Date.now();
        
        return !last || now - last > LoadingController.DIFF_TIME_MS;
    }
    
    /**
     * Получает время последней загрузки из localStorage.
     * @returns {number|null} — метка времени в миллисекундах или null
     */
    getLastLoadTime() {
        const stored = localStorage.getItem(LoadingController.LOCALSTORAGE_KEY);
        const time = stored ? Date.parse(stored) : NaN;
        return isNaN(time) ? null : time;
    }
    
    /**
     * Сохраняет текущую дату как время последней загрузки.
     */
    markLoaded() {
        localStorage.setItem(
            LoadingController.LOCALSTORAGE_KEY,
            new Date().toISOString()
        );
    }
}
