#include<bits/stdc++.h>
using namespace std;
struct vehicles
{
    int Arrival_time1,litres_1,Priority_1;
    string Vehicle_No1;
    double waiting,turnaround,x;
    double completion;
};
bool comp(struct vehicles a,struct vehicles b)
{
    return (a.Priority_1<b.Priority_1);
}
void Customer_details(struct vehicles type[],int *n1)
{
            cout<<"VEHICLE NUMBER : ";
            cin>>type[*n1].Vehicle_No1;
            type[*n1].Arrival_time1=*n1;
            cout<<"AMOUNT OF FUEL REQUIRED(L) : ";
            cin>>type[*n1].litres_1;
            cout<<"SELECT TYPE OF VEHICLE : \n";
            cout<<"PRESS - 1 for EMERGENCY VEHICLE.\n";
            cout<<"PRESS - 2 for GOVERNMENT VEHICLE.\n";
            cout<<"PRESS - 3 for OTHERS.\n";
            cin>>type[*n1].Priority_1;
            (*n1)++;
}
void fuel_filling(struct vehicles type[],int *petrol_num)
{
   string current_time = "12:00 PM";
   if(petrol_num == 0)
   {
       cout<<"No Vehicles present in the fuel filling station...\n";
       return;
   }
    int i,smallest,count=0,time;
    double avg=0,tt=0,end;
    for(i=0;i<*petrol_num;i++)
        type[i].x=type[i].litres_1;

    type[9].Priority_1=-1;
    for(time=0;count!=*petrol_num;time++)
    {
        smallest=9;
        for(i=0;i<*petrol_num;i++)
        {
            if(type[i].Arrival_time1<=time && type[i].Priority_1>type[smallest].Priority_1 && type[i].litres_1>0 )
                smallest=i;
        }
        time+=type[smallest].litres_1-1;
        type[smallest].litres_1=-1;
        count++;
        end=time+1;
        type[smallest].completion = end;
        type[smallest].waiting = end - type[smallest].Arrival_time1 - type[smallest].x;
        type[smallest].turnaround = end - type[smallest].Arrival_time1;
        sort(type,type+(*petrol_num),comp);
    }
  double time_per_litre = 0.1;
  
    for(i=0;i<*petrol_num;i++)
    {   type[i].completion*=time_per_litre;
       type[i].waiting*=time_per_litre;
       type[i].turnaround*=time_per_litre;
        cout<<"Estimated fuel filling time for vehicle No : "<<type[i].Vehicle_No1<<" is "<<type[i].completion<<" minutes...\n";
        avg = avg + type[i].waiting;
        tt = tt + type[i].turnaround;
    }
    cout<<"Average waiting time for filling all the vehicles = "<<avg/(*petrol_num)<<" minutes...\n";
}
int32_t main()
{
    cout<<"\t\t\tCurrent Time = 12:00 PM";
    struct vehicles petrol[10];
    struct vehicles diesel[10];
    int petrol_num=0,diesel_num=0;
    char choice='Y',fuel_type;
    while(petrol_num<=10 && diesel_num<=10 && choice=='Y')
    {
        cout<<"PETROL OR DIESEL ?(P/D) ";
        cin>>fuel_type;
        if(fuel_type=='P')
        {

            Customer_details(petrol,&petrol_num);
        }
        else if(fuel_type == 'D')
        {
            
            Customer_details(diesel,&diesel_num);
        }
        else
        {
            cout<<"INVALID FUEL TYPE !... \n";
        }
        cout<<"PRESS Y TO CONTINUE AND N TO STOP : ";
        cin>>choice;
    }  
    cout<<"\nPetrol filling : \n";
    fuel_filling(petrol,&petrol_num);
    cout<<"\n\n";
    cout<<"Diesel filling : \n";
    fuel_filling(diesel,&diesel_num);
    return 0;
}


