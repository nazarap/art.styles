import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-tinymce',
  template: `
  <textarea id="{{elementId}}" placeholder="Description"></textarea>
  <p style="color: #707070; margin-top: 30px" [(innerHTML)]="styleDescription"></p>
  `
})
export class TinyComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();
  isDisplayPreview: boolean;
  styleDescription: string;

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: '/assets/skins/lightgray',
      height: "250px",
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });

        editor.addMenuItem('previewBtn', {
            icon: 'redo',
            text: 'Preview',
            context: 'tools',
            onclick: () => {
                const content = editor.getContent();
                this.styleDescription = content;
                this.isDisplayPreview = true;
            }
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
