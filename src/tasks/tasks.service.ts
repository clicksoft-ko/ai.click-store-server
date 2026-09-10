import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  // 4 시간 마다 클릭스토어 완료 처리 체크
  @Cron(CronExpression.EVERY_4_HOURS)
  async updateSendTypeOfPayments() {
    const response = await fetch(
      `${process.env.NEXT_URL}/api/orders/update-send-types`,
      {
        method: 'PATCH',
      }
    );
    const result = await response.json();
    console.log('updateSendTypeOfPayments', result);
  }
}
