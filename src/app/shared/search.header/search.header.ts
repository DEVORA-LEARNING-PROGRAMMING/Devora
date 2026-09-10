import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.header.html',
  styleUrl: './search.header.css',
  host: {
    '(document:click)': 'onDocumentClick($event)',
  }
})
export class SearchHeader implements AfterViewInit, OnDestroy {
  searchQuery: string = '';
  suggestions: string[] = [];
  showAutocomplete: boolean = false;

  private pageElements: HTMLElement[] = [];

  ngAfterViewInit(): void {
    // الانتظار قليلاً لحين تحميل عناصر الصفحة بالكامل ثم جمعها
    setTimeout(() => {
      this.scanPageElements();
    }, 500);
  }

  ngOnDestroy(): void {
    // إعادة إظهار كافة العناصر عند مغادرة الصفحة
    this.resetElementsVisibility();
  }

  // دالة عمل سكان لكافة العناصر القابلة للبحث في الصفحة الحالية
  scanPageElements(): void {
    // يمكنك تعديل الـ selectors هنا حسب الكلاسات المستخدمة في كروت ودوروس صفحاتك
    const selectors = '.card, .course-card, .lesson-item, .quiz-card, article, [data-searchable]';
    this.pageElements = Array.from(document.querySelectorAll(selectors));
  }

  // البحث عند كتابة أي حرف
  onSearchInput(): void {
    const query = this.searchQuery.trim().toLowerCase();

    // إعادة عمل Scan سريع للتأكد من التقاط أي عناصر ديناميكية
    if (this.pageElements.length === 0) {
      this.scanPageElements();
    }

    if (!query) {
      this.suggestions = [];
      this.showAutocomplete = false;
      this.resetElementsVisibility();
      return;
    }

    const matchedTitles = new Set<string>();

    // إخفاء أو إظهار عناصر الصفحة بناءً على توافق الحروف المكتوبة
    this.pageElements.forEach((element) => {
      const text = element.textContent?.toLowerCase() || '';
      if (text.includes(query)) {
        element.style.display = ''; // إظهار العنصر
        
        // استخراج أول عنوان أو نص معبر للاقتراحات
        const titleText = element.querySelector('h1, h2, h3, h4, .title')?.textContent?.trim() || element.textContent?.trim() || '';
        if (titleText && titleText.length < 50) {
          matchedTitles.add(titleText);
        }
      } else {
        element.style.display = 'none'; // إخفاء العنصر غير المتطابق
      }
    });

    // عرض القائمة المنسدلة للـ Autocomplete
    this.suggestions = Array.from(matchedTitles).slice(0, 5);
    this.showAutocomplete = this.suggestions.length > 0;
  }

  // عند اختيار عنصر من قائمة الـ Autocomplete
  selectSuggestion(title: string): void {
    this.searchQuery = title;
    this.onSearchInput();
    this.showAutocomplete = false;
  }

  // إعادة إظهار جميع العناصر المخبأة
  private resetElementsVisibility(): void {
    this.pageElements.forEach((element) => {
      element.style.display = '';
    });
  }

  // إخفاء الـ Autocomplete عند الضغط في أي مكان خارجي
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('app-search-header')) {
      this.showAutocomplete = false;
    }
  }
}