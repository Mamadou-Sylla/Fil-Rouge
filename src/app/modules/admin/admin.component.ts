import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../models/user.model';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PostUserComponent} from '../../shared/components/post-user/post-user.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, AfterViewInit {


 public displayedColumns: string[] = ['#', 'Firstname', 'Lastname', 'Email', 'Telephone', 'Etat', 'Detail', 'Modifier', 'Supprimer'];
 public dataSource = new MatTableDataSource<UserModel>();
 private id: any;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  constructor(public http: HttpClient, private router: Router, private dialog: MatDialog) {
    this.http.get('http://127.0.0.1:8000/api/admin/formateurs').subscribe(
      request => {
        this.dataSource.data = request as UserModel[];
        console.log(request);
      },
      error => console.log(error)
    );
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    }



  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }


  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // tslint:disable-next-line:typedef
  onCreate()
  {
    // this.service.initializeFormGroup;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    this.dialog.open(PostUserComponent, dialogConfig);
    this.onClose();
  }
  onClose()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
  }
}

