import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Observable } from 'rxjs';
import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  posts$!: Observable<any[]>;
  postDetails$: Observable<any> | null = null;
  isModalOpen = false;

  constructor(private postsService: PostService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.posts$ = this.postsService.fetchPosts();
  }

  openModal(id: number): void {
    this.isModalOpen = true;
    this.postDetails$ = this.postsService.fetchPostById(id);
  }

  closeModal(): void {
    this.isModalOpen = false; // Close the modal
  }
}
