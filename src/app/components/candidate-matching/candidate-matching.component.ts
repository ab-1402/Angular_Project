import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-candidate-matching',
  templateUrl: './candidate-matching.component.html',
  styleUrls: ['./candidate-matching.component.css']
})
export class CandidateMatchingComponent implements OnInit {
  displayedColumns: string[] = ['name', 'score'];
  candidates: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getMatchedCandidates();
  }

  getMatchedCandidates() {
    this.http.get<any[]>('http://127.0.0.1:5000/match_candidates')
      .subscribe(response => {
        console.log('API Response:', response); // Debugging
        this.candidates = response;
      }, error => {
        console.error('API Error:', error); // Error handling
      });
  }
  
}
