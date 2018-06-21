class Api::V1::EventsController < ApplicationController


      # GET /events

      def index
        events = Event.order('created_at ASC');
        render json: {status: 'SUCCESS', message: 'Loaded Events', data:events}, status: :ok
      end

      # GET /events/1
      def show
        event = Event.find(params[:id])
        render json: {status: 'SUCCESS', message: 'Loaded Event', data:event}, status: :ok
      end

      # POST /events

      def create
        event = Event.new(event_params)
        if event.save
          render json: {status: :created, message: 'Saved Event', data:event}, status: :ok
        else
          render json: {status: 'ERROR', message: 'Event not saved', data:event.errors}, status: :unprocessable_entity
        end
      end
      
      # POST /events
      def update
        event = Event.find(params[:id])
        if event.update_attributes(event_params)
          render json: {status: 'SUCCESS', message: 'Updated Event', data:event}, status: :ok
        else
          render json: {status: 'ERROR', message: 'Event not updated', data:event.errors}, status: :unprocessable_entity
        end
      end
      
      # DELETE /events/1

      def destroy
        event = Event.find(params[:id])
        event.destroy
        render json: {status: :created, message: 'Deleted Event', data:event}, status: :ok
      end

      private
      
      def event_params
        params.permit(:title, :description, :start_time, :end_time)
      end

    end
  