import { Component, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  standalone: true,
  styleUrls: ['./home.css'],
  imports: [CommonModule , RouterModule]
})
export class Home implements OnInit {
  scannedText: string | null = null;
  appInfo: any = null;

ngOnInit(): void {
  if (typeof window !== 'undefined') {
    (window as any).fromFlutterScanResult = (result: string) => {
      this.scannedText = result ?? '';
    };
    (window as any).fromFlutterAppInfo = (info: any) => {
      this.appInfo = info ?? {};
    };
  }
}

  onScan(): void {
    if ((window as any).FlutterChannel) {
      (window as any).FlutterChannel.postMessage('scan'); // Triggers Flutter scan
    }
  }

  getAppInfo(): void {
    if ((window as any).FlutterChannel) {
      (window as any).FlutterChannel.postMessage('getAppInfo'); // Request app info
    }
  }

  showPopup(): void {
    if ((window as any).FlutterChannel) {
      (window as any).FlutterChannel.postMessage('showPopup:This popup is triggered from Angular!');
    }
  }
}
