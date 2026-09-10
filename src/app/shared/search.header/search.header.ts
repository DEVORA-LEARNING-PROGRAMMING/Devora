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
    setTimeout(() => {
      this.scanPageElements();
    }, 500);
  }

  ngOnDestroy(): void {
    this.resetElementsVisibility();
  }

  scanPageElements(): void {
    const selectors = '.card, .course-card, .lesson-item, .quiz-card, article, [data-searchable]';
    this.pageElements = Array.from(document.querySelectorAll(selectors));
  }

  onSearchInput(): void {
    const query = this.searchQuery.trim().toLowerCase();

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

    this.pageElements.forEach((element) => {
      const text = element.textContent?.toLowerCase() || '';
      if (text.includes(query)) {
        element.style.display = '';

        const titleText = element.querySelector('h1, h2, h3, h4, .title')?.textContent?.trim() || element.textContent?.trim() || '';
        if (titleText && titleText.length < 50) {
          matchedTitles.add(titleText);
        }
      } else {
        element.style.display = 'none';
      }
    });

    this.suggestions = Array.from(matchedTitles).slice(0, 5);
    this.showAutocomplete = this.suggestions.length > 0;
  }

  selectSuggestion(title: string): void {
    this.searchQuery = title;
    this.onSearchInput();
    this.showAutocomplete = false;
  }

  private resetElementsVisibility(): void {
    this.pageElements.forEach((element) => {
      element.style.display = '';
    });
  }

  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('app-search-header')) {
      this.showAutocomplete = false;
    }
  }
}
